# NATゲートウェイは高すぎるので個人では使わない

resource "aws_nat_gateway" "db" {
  allocation_id = "${aws_eip.nat_gateway.id}"
  subnet_id = "${aws_subnet.web.id}"

  tags {
    Name = "tf-test"
  }

  depends_on = ["aws_internet_gateway.main"]
}
