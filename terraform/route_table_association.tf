resource "aws_route_table_association" "main" {
  subnet_id      = "${aws_subnet.web.id}"
  route_table_id = "${aws_route_table.main.id}"
}

resource "aws_route_table_association" "nat_gateway" {
  subnet_id      = "${aws_subnet.db.id}"
  route_table_id = "${aws_route_table.nat_gateway.id}"
}
