resource "aws_cloudwatch_log_group" "coffeehub" {
  name = "ecs/coffeehub"
  retention_in_days = 60
}
