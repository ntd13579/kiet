from cloudinary.models import CloudinaryField
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = CloudinaryField('avatar', null=True)


class Faculty(models.Model):
    name = models.CharField(max_length=50, null=False)


class ScoringRubric(models.Model):
    name = models.CharField(max_length=50, null=False)


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, null=False)


class Supervisor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, null=False)


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, null=False)


class ThesisDefenseCommittee(models.Model):
    year = models.IntegerField(null=False)


class ThesisDefenseCommitteeMember(models.Model):
    ROLES = [
        ('Chủ tịch', 'Chairman'),
        ('Thư ký', 'Secretary'),
        ('Bảo vệ', 'Reviewer'),
        ('Thành viên', 'Member'),
    ]

    thesis_defense_committee = models.ForeignKey(ThesisDefenseCommittee, on_delete=models.CASCADE, null=False)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=False)
    role = models.CharField(max_length=10, null=False, choices=ROLES)


class Thesis(models.Model):
    title = models.CharField(max_length=150, null=False)
    year = models.IntegerField(null=False)
    supervisor = models.ForeignKey(Supervisor, on_delete=models.CASCADE, null=False)
    students = models.ManyToManyField(Student, related_name='theses', limit_choices_to=2)
    instructors = models.ManyToManyField(Teacher, related_name='instructed_theses', limit_choices_to=2)
    defense_committee = models.ForeignKey(ThesisDefenseCommittee, on_delete=models.CASCADE, null=False)
    is_closed = models.BooleanField(null=False, default=False)


class Grade(models.Model):
    thesis = models.ForeignKey(Thesis, on_delete=models.CASCADE, null=False)
    committee_member = models.ForeignKey(ThesisDefenseCommitteeMember, on_delete=models.CASCADE, null=False)
    scoring_rubric = models.ForeignKey(ScoringRubric, on_delete=models.CASCADE, null=False)
    grade = models.IntegerField(null=False)


class ThesisRequest(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=False)
    year = models.IntegerField(null=False)
