resource "aws_subnet" "web" {
  vpc_id = "${aws_vpc.main.id}"
  cidr_block = "10.1.1.0/24"

  tags {
    Name = "tf-test-web"
  }
}
