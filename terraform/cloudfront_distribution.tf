locals {
  origin_id = "origin_lb_web"
}

resource "aws_cloudfront_distribution" "web" {
  origin {
    domain_name = "${var.alb_domain_name}"
    origin_id   = "${local.origin_id}"

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
      origin_protocol_policy = "match-viewer"
    }
  }

  enabled             = true
  is_ipv6_enabled     = false
  aliases = ["${var.domain_name}"]

  viewer_certificate {
    acm_certificate_arn = "${var.cloudfront_certificate}"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  default_cache_behavior {
    target_origin_id = "${local.origin_id}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "DELETE"]
    cached_methods   = ["GET", "HEAD"]
    min_ttl                = 0
    max_ttl                = 0
    default_ttl            = 0

    forwarded_values {
      cookies {
        forward = "all"
      }

      query_string = true
    }
  }

  # Webpacker
  ordered_cache_behavior {
    path_pattern     = "/packs/*"
    target_origin_id = "${local.origin_id}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      cookies {
        forward = "none"
      }
      query_string = false
    }

    compress               = true
  }

  # Other images
  ordered_cache_behavior {
    path_pattern     = "/images/*"
    target_origin_id = "${local.origin_id}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      cookies {
        forward = "none"
      }
      query_string = false
    }

    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
