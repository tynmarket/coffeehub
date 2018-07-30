resource "aws_instance" "example" {
  ami           = "ami-e99f4896"
  instance_type = "t2.micro"
  key_name = "awskey"
  subnet_id = "subnet-0c0c1d45"
  vpc_security_group_ids = ["sg-f4525d8c"]
  tags {
      Name = "tf-test"
  }
}

resource "aws_eip" "ip" {
  instance = "${aws_instance.example.id}"
}
