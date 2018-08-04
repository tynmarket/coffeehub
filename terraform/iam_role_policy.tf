resource "aws_iam_role_policy" "ecs_service" {
  name = "ecs-service"
  role = "${aws_iam_role.ecs_service.id}"

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:AttachNetworkInterface",
                "ec2:CreateNetworkInterface",
                "ec2:CreateNetworkInterfacePermission",
                "ec2:DeleteNetworkInterface",
                "ec2:DeleteNetworkInterfacePermission",
                "ec2:Describe*",
                "ec2:DetachNetworkInterface",
                "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
                "elasticloadbalancing:DeregisterTargets",
                "elasticloadbalancing:Describe*",
                "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
                "elasticloadbalancing:RegisterTargets",
                "route53:ChangeResourceRecordSets",
                "route53:CreateHealthCheck",
                "route53:DeleteHealthCheck",
                "route53:Get*",
                "route53:List*",
                "route53:UpdateHealthCheck",
                "servicediscovery:DeregisterInstance",
                "servicediscovery:Get*",
                "servicediscovery:List*",
                "servicediscovery:RegisterInstance",
                "servicediscovery:UpdateInstanceCustomHealthStatus"
            ],
            "Resource": "*"
        }
    ]
}
EOF
}

# resource "aws_iam_role_policy" "ecs_instance" {
#   name = "ecs-instance"
#   role = "${aws_iam_role.ecs_instance.id}"
#
#   policy = <<EOF
# {
#     "Version": "2012-10-17",
#     "Statement": [
#         {
#             "Effect": "Allow",
#             "Action": [
#                 "ecs:CreateCluster",
#                 "ecs:DeregisterContainerInstance",
#                 "ecs:DiscoverPollEndpoint",
#                 "ecs:Poll",
#                 "ecs:RegisterContainerInstance",
#                 "ecs:StartTelemetrySession",
#                 "ecs:UpdateContainerInstancesState",
#                 "ecs:Submit*",
#                 "ecr:GetAuthorizationToken",
#                 "ecr:BatchCheckLayerAvailability",
#                 "ecr:GetDownloadUrlForLayer",
#                 "ecr:BatchGetImage",
#                 "logs:CreateLogStream",
#                 "logs:PutLogEvents"
#             ],
#             "Resource": "*"
#         }
#     ]
# }
# EOF
# }
