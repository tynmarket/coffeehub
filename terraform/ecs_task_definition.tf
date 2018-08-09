resource "aws_ecs_task_definition" "app" {
  family                = "nginx"
  cpu = 1024
  memory = 500
  #container_definitions = "${file("container-definitions.json")}"
  container_definitions = <<EOF
[
  {
    "name": "nginx",
    "image": "${var.aws_account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/coffeehub:latest",
    "essential": true,
    "portMappings": [
      {
        "containerPort": 80,
        "hostPort": 80
      }
    ],
    "environment": [
      {
        "name": "RAILS_ENV",
        "value": "production"
      },
      {
        "name": "DB_USERNAME",
        "value": "${var.db_username}"
      },
      {
        "name": "DB_PASSWORD",
        "value": "${var.db_password}"
      },
      {
        "name": "DB_HOST",
        "value": "${var.db_host}"
      },
      {
        "name": "RAILS_MASTER_KEY",
        "value": "${var.rails_master_key}"
      },
      {
        "name": "MACKEREL_API_KEY",
        "value": "${var.mackerel_api_key}"
      }
    ]
  }
]
  EOF
}
