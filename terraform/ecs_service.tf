resource "aws_ecs_service" "app" {
  name            = "tf-test"
  cluster         = "${aws_ecs_cluster.app.id}"
  task_definition = "${aws_ecs_task_definition.app.arn}"
  desired_count   = 2
  iam_role        = "${aws_iam_role.ecs_service.arn}"
  depends_on      = ["aws_iam_role_policy.ecs_service", "aws_lb.web"]

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
