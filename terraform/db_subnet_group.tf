resource "aws_db_subnet_group" "db" {
  name        = "tf-test"
  subnet_ids  = ["${aws_subnet.db.id}", "${aws_subnet.db_sub.id}"]
}
