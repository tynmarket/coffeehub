resource "aws_db_instance" "db" {
  identifier           = "coffeehub"
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  name                 = "coffeehub"
  username             = "${var.username}"
  password             = "${var.password}"
  parameter_group_name = "default.mysql5.7"
  auto_minor_version_upgrade = false
  copy_tags_to_snapshot = true
  skip_final_snapshot = true
  # maintenance_window
  vpc_security_group_ids = ["${aws_security_group.db.id}"]
  db_subnet_group_name   = "${aws_db_subnet_group.db.id}"
}
