
var AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-1' })

var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const data = require('./rights-cet-fields.json')
var params = {
  TableName: 'rights-cet-fields',
  Item: data
}

docClient.put(params, function (err, data) {
  if (err) {
    console.log("Error", err)
  } else {
    console.log("Success", data.Item)
  }
})