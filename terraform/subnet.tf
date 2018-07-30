resource "aws_subnet" "web" {
  vpc_id = "${aws_vpc.main.id}"
  cidr_block = "10.1.1.0/24"

  tags {
    Name = "tf-test-web"
  }
}

resource "aws_subnet" "db" {
  vpc_id = "${aws_vpc.main.id}"
  cidr_block = "10.1.2.0/24"

  tags {
    Name = "tf-test-db"
  }
}
