# aws_appautoscaling_policyでtarget_tracking_scaling_policy_configurationを設定した時に作成されるアラーム

# resource "aws_cloudwatch_metric_alarm" "app_scale_out" {
#   alarm_name          = "app-scale-out"
#   comparison_operator = "GreaterThanThreshold"
#   evaluation_periods  = 3
#   metric_name         = "CPUUtilization"
#   namespace           = "AWS/ECS"
#   period              = 60
#   statistic           = "Average"
#   threshold           = 50
#
#   dimensions {
#     ClusterName = "${aws_ecs_cluster.app.name}"
#     ServiceName = "${aws_ecs_service.app.name}"
#   }
#
#   alarm_description = "test"
#   alarm_actions     = ["${aws_appautoscaling_policy.app.arn}"]
# }
#
# resource "aws_cloudwatch_metric_alarm" "app_scale_in" {
#   alarm_name          = "app-scale-in"
#   comparison_operator = "LessThanThreshold"
#   evaluation_periods  = 15
#   metric_name         = "CPUUtilization"
#   namespace           = "AWS/ECS"
#   period              = 60
#   statistic           = "Average"
#   threshold           = 45
#
#   dimensions {
#     ClusterName = "${aws_ecs_cluster.app.name}"
#     ServiceName = "${aws_ecs_service.app.name}"
#   }
#
#   alarm_description = "test"
#   alarm_actions     = ["${aws_appautoscaling_policy.app.arn}"]
# }
