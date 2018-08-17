# DNSによるバリデーションが必要

# resource "aws_acm_certificate" "coffeehub" {
#   # リージョンはバージニアで取得
#   domain_name       = "*.coffeehub.tokyo"
#   subject_alternative_names = ["coffeehub.tokyo"]
#   validation_method = "DNS"
#
#   lifecycle {
#     create_before_destroy = true
#   }
# }

resource "aws_acm_certificate" "alb" {
  domain_name       = "${var.alb_domain_name}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
