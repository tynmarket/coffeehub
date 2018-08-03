resource "aws_ecs_task_definition" "app" {
  family                = "nginx"
  cpu = 256
  memory = 300
  container_definitions = "${file("task-definition.json")}"
}
