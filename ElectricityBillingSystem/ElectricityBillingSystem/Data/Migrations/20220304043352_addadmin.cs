using Microsoft.EntityFrameworkCore.Migrations;

namespace ElectricityBillingSystem.Data.Migrations
{
    public partial class addadmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AdminDetails",
                table: "AdminDetails");

            migrationBuilder.RenameTable(
                name: "AdminDetails",
                newName: "Admin");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Admin",
                table: "Admin",
                column: "AdminId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Admin",
                table: "Admin");

            migrationBuilder.RenameTable(
                name: "Admin",
                newName: "AdminDetails");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdminDetails",
                table: "AdminDetails",
                column: "AdminId");
        }
    }
}
