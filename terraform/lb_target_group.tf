resource "aws_lb_target_group" "web" {
  name     = "tf-test"
  port     = 80
  protocol = "HTTP"
  vpc_id   = "${aws_vpc.main.id}"
}
