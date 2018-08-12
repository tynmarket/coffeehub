resource "aws_autoscaling_group" "app" {
  name                 = "tf-test"
  min_size             = "1"
  max_size             = "2"
  desired_capacity     = "1"
  launch_configuration = "${aws_launch_configuration.app.name}"
  target_group_arns    = ["${aws_lb_target_group.web.arn}"]
  vpc_zone_identifier  = ["${aws_subnet.web.id}", "${aws_subnet.web_sub.id}"]
  health_check_grace_period = 0
}
