resource "aws_iam_instance_profile" "ecs_instance" {
  name = "ecs-instance"
  role = "ecsInstanceRole"
}
