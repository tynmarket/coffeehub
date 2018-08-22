resource "aws_s3_bucket" "coffeehub" {
  bucket = "coffeehub"
  acl    = "private"
}
