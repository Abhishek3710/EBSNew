using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ElectricityBillingSystem.Data.Migrations
{
    public partial class AddConnectionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billings_Customers_CustomerId",
                table: "Billings");

            migrationBuilder.DropIndex(
                name: "IX_Billings_CustomerId",
                table: "Billings");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Billings");

            migrationBuilder.AddColumn<int>(
                name: "ConnectionId",
                table: "Billings",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Connection",
                columns: table => new
                {
                    ConnectionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ConnectionNumber = table.Column<string>(maxLength: 255, nullable: false),
                    CustomerId = table.Column<int>(nullable: false),
                    ConnectionType = table.Column<string>(maxLength: 200, nullable: false),
                    ConnectionStartDate = table.Column<DateTime>(nullable: false),
                    Load = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Connection", x => x.ConnectionId);
                    table.ForeignKey(
                        name: "FK_Connection_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Billings_ConnectionId",
                table: "Billings",
                column: "ConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_Connection_CustomerId",
                table: "Connection",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billings_Connection_ConnectionId",
                table: "Billings",
                column: "ConnectionId",
                principalTable: "Connection",
                principalColumn: "ConnectionId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billings_Connection_ConnectionId",
                table: "Billings");

            migrationBuilder.DropTable(
                name: "Connection");

            migrationBuilder.DropIndex(
                name: "IX_Billings_ConnectionId",
                table: "Billings");

            migrationBuilder.DropColumn(
                name: "ConnectionId",
                table: "Billings");

            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                table: "Billings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Billings_CustomerId",
                table: "Billings",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billings_Customers_CustomerId",
                table: "Billings",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
