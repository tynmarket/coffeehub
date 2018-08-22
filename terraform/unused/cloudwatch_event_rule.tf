resource "aws_cloudwatch_event_rule" "export_coffeehub_logs" {
  name        = "export-coffeehub-logs"

  schedule_expression = "cron(5 15 * * ? *)"
}
