conn = new Mongo('127.0.0.1:[Port-Placeholder]');
db = conn.getDB('urangutest');
db = db.getSiblingDB('admin');
db.auth("[Username-Placeholder]", "[Password-Placeholder]");
db = db.getSiblingDB('urangutest');
