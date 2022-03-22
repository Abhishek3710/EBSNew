using Microsoft.EntityFrameworkCore.Migrations;

namespace ElectricityBillingSystem.Data.Migrations
{
    public partial class AddConnectionTable1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billings_Connection_ConnectionId",
                table: "Billings");

            migrationBuilder.DropForeignKey(
                name: "FK_Connection_Customers_CustomerId",
                table: "Connection");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Connection",
                table: "Connection");

            migrationBuilder.RenameTable(
                name: "Connection",
                newName: "Connections");

            migrationBuilder.RenameIndex(
                name: "IX_Connection_CustomerId",
                table: "Connections",
                newName: "IX_Connections_CustomerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Connections",
                table: "Connections",
                column: "ConnectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billings_Connections_ConnectionId",
                table: "Billings",
                column: "ConnectionId",
                principalTable: "Connections",
                principalColumn: "ConnectionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Connections_Customers_CustomerId",
                table: "Connections",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billings_Connections_ConnectionId",
                table: "Billings");

            migrationBuilder.DropForeignKey(
                name: "FK_Connections_Customers_CustomerId",
                table: "Connections");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Connections",
                table: "Connections");

            migrationBuilder.RenameTable(
                name: "Connections",
                newName: "Connection");

            migrationBuilder.RenameIndex(
                name: "IX_Connections_CustomerId",
                table: "Connection",
                newName: "IX_Connection_CustomerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Connection",
                table: "Connection",
                column: "ConnectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billings_Connection_ConnectionId",
                table: "Billings",
                column: "ConnectionId",
                principalTable: "Connection",
                principalColumn: "ConnectionId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Connection_Customers_CustomerId",
                table: "Connection",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
