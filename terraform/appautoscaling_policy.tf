resource "aws_appautoscaling_policy" "app" {
  name                    = "tf-test"
  policy_type             = "TargetTrackingScaling"
  resource_id             = "service/${aws_ecs_cluster.app.name}/${aws_ecs_service.app.name}"
  scalable_dimension      = "ecs:service:DesiredCount"
  service_namespace       = "ecs"

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value = 50
    scale_in_cooldown = 300
    scale_out_cooldown = 300
  }

  depends_on = ["aws_appautoscaling_target.app"]
}
