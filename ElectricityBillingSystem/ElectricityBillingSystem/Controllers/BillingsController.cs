using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricityBillingSystem.Data;
using ElectricityBillingSystem.Entites;

namespace ElectricityBillingSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BillingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Billings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Billing>>> GetBillings()
        {
            return await _context.Billings.ToListAsync();
        }

        // GET: api/Billings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Billing>> GetBilling(int id)
        {
            var billing = await _context.Billings.FindAsync(id);

            if (billing == null)
            {
                return NotFound();
            }

            return billing;
        }

        // PUT: api/Billings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBilling(int id, Billing billing)
        {
            if (id != billing.BillId)
            {
                return BadRequest();
            }

            _context.Entry(billing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Billings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Billing>> PostBilling(Billing billing)
        {
            _context.Billings.Add(billing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBilling", new { id = billing.BillId }, billing);
        }

        // DELETE: api/Billings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Billing>> DeleteBilling(int id)
        {
            var billing = await _context.Billings.FindAsync(id);
            if (billing == null)
            {
                return NotFound();
            }

            _context.Billings.Remove(billing);
            await _context.SaveChangesAsync();

            return billing;
        }


        [Route("FindBillByConncetionId/{ConnectionId}")]
        [HttpGet]
        //[Route("FindBillByConncetionId/{ConnectionId}")]
        public IActionResult FindBillByConncetionId(int ConnectionId)
        {
            try
            {
                List<Billing> billings = _context.Billings.Where(i => i.ConnectionId == ConnectionId && i.Status=="Not Paid").ToList();
                return Ok(billings);
            }
            catch(Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [Route("FindAllBills/{ConnectionId}")]
        [HttpGet]
        //[Route("FindBillByConncetionId/{ConnectionId}")]
        public IActionResult FindAllBills(int ConnectionId)
        {
            try
            {
                List<Billing> billings = _context.Billings.Where(i => i.ConnectionId == ConnectionId).ToList();
                return Ok(billings);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }


        [Route("StatusChange/{BillId}")]
        [HttpPut]
        //[Route("FindBillByConncetionId/{ConnectionId}")]
        public IActionResult StatusChange(int BillId)
        {
            try
            {
                Billing billing = _context.Billings.Where(i => i.BillId == BillId).Single();
                billing.Status = "Paid";
                _context.SaveChanges();
                return Ok(billing);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        private bool BillingExists(int id)
        {
            return _context.Billings.Any(e => e.BillId == id);
        }
    }
}
