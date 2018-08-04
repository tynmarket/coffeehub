resource "aws_ecs_task_definition" "app" {
  family                = "nginx"
  cpu = "1 vCPU"
  memory = 500
  container_definitions = "${file("task-definition.json")}"
}
