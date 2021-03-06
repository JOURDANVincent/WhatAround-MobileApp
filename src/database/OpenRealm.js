import Realm from "realm";
import {ObjectId} from 'bson';
import { UserSchema } from '../schemas/Schema';
import { getRealmApp }  from './RealmApp'


export default openRealm = async ( ) => {

    const app = getRealmApp()

    try {

        console.log(`trying to connect DB with the user: ${app.currentUser.id}`)

        const config = {
            
            schema: [UserSchema],
            sync: {
                user: app.currentUser,
                partitionValue: String(app.currentUser.id),
            },
        };

        realm = await Realm.open(config)
        console.log('Connection DB OK !!!!!')
          
        return realm ;

    } catch (error) {
        console.error("Failed to open whatAround DB !!!!!", error.code, error.message);
        return error.message
    }

}
