import { t as require_lib } from "../_libs/mongodb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-BOTlyzTw.js
var import_lib = require_lib();
var uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
var dbName = process.env.MONGODB_DB || "apology_tracker";
var client = null;
async function getDb() {
	if (!client) {
		client = new import_lib.MongoClient(uri);
		await client.connect();
	}
	return client.db(dbName);
}
//#endregion
export { getDb };
