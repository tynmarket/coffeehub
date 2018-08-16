resource "aws_route_table" "main" {
  vpc_id = "${aws_vpc.main.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.main.id}"
  }

  tags {
    Name = "main"
  }
}

# resource "aws_route_table" "nat_gateway" {
#   vpc_id = "${aws_vpc.main.id}"
#
#   route {
#     cidr_block = "0.0.0.0/0"
#     nat_gateway_id = "${aws_nat_gateway.db.id}"
#   }
#
#   tags {
#     Name = "nat_gateway"
#   }
# }
