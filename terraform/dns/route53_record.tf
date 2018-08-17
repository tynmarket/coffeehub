resource "aws_route53_record" "cloudfront" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "${var.domain_name}"
  type    = "A"
  allow_overwrite = false

  alias {
    name                   = "${aws_cloudfront_distribution.web.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.web.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "alb" {
  zone_id = "${aws_route53_zone.primary.zone_id}"
  name    = "${var.alb_domain_name}"
  type    = "A"
  allow_overwrite = false

  alias {
    name                   = "${aws_lb.web.dns_name}"
    zone_id                = "${aws_lb.web.zone_id}"
    evaluate_target_health = false
  }
}
