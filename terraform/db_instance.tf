resource "aws_db_instance" "db" {
  identifier           = "coffeehub"
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7.22"
  instance_class       = "db.t2.micro"
  name                 = "coffeehub"
  username             = "${var.db_username}"
  password             = "yon121sen"
  parameter_group_name = "${aws_db_parameter_group.db.name}"
  apply_immediately = true
  auto_minor_version_upgrade = false
  copy_tags_to_snapshot = true
  skip_final_snapshot = true
  # maintenance_window
  vpc_security_group_ids = ["${aws_security_group.db.id}"]
  db_subnet_group_name   = "${aws_db_subnet_group.db.id}"
  backup_retention_period = 7
  backup_window = "17:00-19:00"
  maintenance_window = "Sun:19:00-Sun:21:00"
}

output "aws_db_instance.db.address" {
  value = "${aws_db_instance.db.address}"
}
