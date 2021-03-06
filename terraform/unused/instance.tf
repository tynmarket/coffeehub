resource "aws_instance" "web" {
  ami = "ami-e99f4896"
  instance_type = "t2.micro"
  key_name = "awskey"
  subnet_id = "${aws_subnet.web.id}"
  vpc_security_group_ids = ["${aws_security_group.app.id}", "${aws_security_group.ssh.id}"]

  tags {
    Name = "tf-test"
  }
}

output "aws_instance.web.public_ip" {
    value = "${aws_instance.web.public_ip}"
}
