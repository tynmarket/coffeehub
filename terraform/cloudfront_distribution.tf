locals {
  origin_id = "origin_lb_web"
}

resource "aws_cloudfront_distribution" "web" {
  origin {
    domain_name = "${aws_lb.web.dns_name}"
    origin_id   = "${local.origin_id}"

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
      origin_protocol_policy = "http-only"
    }
  }

  enabled             = true
  is_ipv6_enabled     = false
  aliases = ["${var.domain_name}"]

  default_cache_behavior {
    target_origin_id = "${local.origin_id}"
    viewer_protocol_policy = "allow-all"
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
    viewer_protocol_policy = "allow-all"
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
    viewer_protocol_policy = "allow-all"
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

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
