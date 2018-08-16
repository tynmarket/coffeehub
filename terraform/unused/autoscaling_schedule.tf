# タスクが動いてないインスタンスをスケールインさせる必要がある
# https://christina04.hatenablog.com/entry/2017/10/19/190000

resource "aws_autoscaling_schedule" "app_scale_out" {
  scheduled_action_name  = "app-scale-out"
  min_size               = 1
  max_size               = 2
  desired_capacity       = 2
  recurrence             = "50 10 * * *"
  autoscaling_group_name = "${aws_autoscaling_group.app.name}"
}

resource "aws_autoscaling_schedule" "app_scale_in" {
  scheduled_action_name  = "app-scale-in"
  min_size               = 1
  max_size               = 2
  desired_capacity       = 1
  recurrence             = "10 11 * * *"
  autoscaling_group_name = "${aws_autoscaling_group.app.name}"
}
