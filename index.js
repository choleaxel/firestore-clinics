import admin from "firebase-admin"
 
import serviceAccount from './credentials.js'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// const clinic = {
//     name: 'JBAH',
//     location: '12834 US Hwy 1',
//     phone: '561-626-8000',
//     type: 'Small Animal',
//     exotic: false,
//     corporate: true,
// }

// db.collection('clinics').add(clinic)

const clinicCol = db.collection('clinics')

const clinic2 = {
    name: 'Bluffs',
    location: '13440 US HWY 1',
    phone: '561-626-2318',
    type: 'Small Animal',
    exotic: false,
    coporate: false,
}
clinicCol.add(clinic2)

// clinicCol.doc(clinic2).set ({
//     leadDvm: 'Dr. Bob Horwitz',
//     associateDvms: 2,
// }) this did not work

/*since i am using the short hand, how to I add to the document
clinic 2? How do i fix 'coporate' to corporate? */