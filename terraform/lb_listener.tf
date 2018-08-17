# resource "aws_lb_listener" "web" {
#   load_balancer_arn = "${aws_lb.web.arn}"
#   port              = "80"
#   protocol          = "HTTP"
#
#   default_action {
#     target_group_arn = "${aws_lb_target_group.web.arn}"
#     type             = "forward"
#   }
# }

resource "aws_lb_listener" "web_ssl" {
  load_balancer_arn = "${aws_lb.web.arn}"
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "${aws_acm_certificate.alb.arn}"

  default_action {
    target_group_arn = "${aws_lb_target_group.web.arn}"
    type             = "forward"
  }
}
