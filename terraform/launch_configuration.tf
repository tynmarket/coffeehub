resource "aws_launch_configuration" "app" {
  name_prefix   = "lc-"
  security_groups = ["${aws_security_group.app.id}", "${aws_security_group.ssh.id}"]
  key_name                    = "awskey"
  image_id                    = "ami-7d0c7a90"
  instance_type               = "t2.micro"
  iam_instance_profile        = "${aws_iam_instance_profile.ecs_instance.name}"
  user_data                   = "${file("user_data.sh")}"
  associate_public_ip_address = true

  lifecycle {
    create_before_destroy = true
  }
}
