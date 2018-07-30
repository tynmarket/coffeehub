resource "aws_instance" "web" {
  ami = "ami-e99f4896"
  instance_type = "t2.micro"
  key_name = "awskey"
  subnet_id = "${aws_subnet.web.id}"
  vpc_security_group_ids = ["${aws_security_group.web.id}"]

  tags {
    Name = "tf-test"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.web.id}"
}
