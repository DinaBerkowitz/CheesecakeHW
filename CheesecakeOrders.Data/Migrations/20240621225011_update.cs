using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheesecakeOrders.Data.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TotalCost",
                table: "CheesecakeOrders",
                newName: "Total");

            migrationBuilder.RenameColumn(
                name: "CheesecakeBase",
                table: "CheesecakeOrders",
                newName: "Base");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Total",
                table: "CheesecakeOrders",
                newName: "TotalCost");

            migrationBuilder.RenameColumn(
                name: "Base",
                table: "CheesecakeOrders",
                newName: "CheesecakeBase");
        }
    }
}
