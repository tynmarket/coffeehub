resource "aws_ecs_service" "app" {
  name            = "tf-test"
  cluster         = "${aws_ecs_cluster.app.id}"
  task_definition = "${aws_ecs_task_definition.app.arn}"
  desired_count   = 2
  iam_role        = "arn:aws:iam::972973246324:role/aws-service-role/ecs.amazonaws.com/AWSServiceRoleForECS"
  depends_on      = ["aws_lb.web"]
  deployment_minimum_healthy_percent = 50
  deployment_maximum_percent = 100

  ordered_placement_strategy {
    type  = "binpack"
    field = "memory"
  }

  load_balancer {
    target_group_arn = "${aws_lb_target_group.web.arn}"
    container_name   = "nginx"
    container_port   = 80
  }

  # lifecycle {
  #   ignore_changes = ["desired_count", "task_definition"]
  # }
}
