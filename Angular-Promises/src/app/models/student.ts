export class StudentModel {
    id: number = 0;
    dni!: number;
    lastName!: string;
    firstName!: string;
    email!: string;
    cohort: number = 0;
    status: string = 'activo';
    gender: string = 'masculino';
    address: string = 'abc123';
    phone: number = 0;
}
/*
'dni': document.getElementById('dni').value,
'lastName': document.getElementById('lastName').value,
'firstName': document.getElementById('firstName').value,
'email': document.getElementById('email').value,
'cohort': '0',
'status': 'activo',
'gender': 'masculino',
'address': 'abc123',
'phone': '000'
*/
