resource "aws_lb" "web" {
  name               = "tf-test"
  security_groups    = ["${aws_security_group.web.id}"]
  subnets            = ["${aws_subnet.web.id}", "${aws_subnet.web_sub.id}"]
}
