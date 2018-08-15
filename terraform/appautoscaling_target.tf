resource "aws_appautoscaling_target" "app" {
  max_capacity       = 4
  min_capacity       = 2
  resource_id        = "service/${aws_ecs_cluster.app.name}/${aws_ecs_service.app.name}"
  # role_arn           = "arn:aws:iam::972973246324:role/ecsAutoscaleRole"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}
