resource "aws_route_table_association" "main" {
  subnet_id      = "${aws_subnet.web.id}"
  route_table_id = "${aws_route_table.main.id}"
}

resource "aws_route_table_association" "db" {
  subnet_id      = "${aws_subnet.db.id}"
  route_table_id = "${aws_route_table.nat_gateway.id}"
}

resource "aws_route_table_association" "db_sub" {
  subnet_id      = "${aws_subnet.db_sub.id}"
  route_table_id = "${aws_route_table.nat_gateway.id}"
}
