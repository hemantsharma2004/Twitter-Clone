const mongoose = require('mongoose');

// const postSchema = mongoose.Schema({
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     image: {
//         publicId: String,
//         url: String
//     },
//     caption: {
//         type: String,
//         required: true
//     },
//     likes: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//         }
//     ]
// }, {
//     timestamps: true
// })

// const postSchema = mongoose.Schema({
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true
//     },
//     image: {
//         publicId: String,
//         url: String
//     },
//     caption: {
//       type: String,
//       required: true
//     },
//     likes: [
//       {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: 'User'
//         }
//     ],
//     comments: [
//       {
//           user: {
//               type: mongoose.Schema.Types.ObjectId,
//               ref: 'User'
//             },
//             text: String,
          
//         }
//     ]
// }, {
//     timestamps: true
// });


const postSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
      publicId: String,
      url: String
    },
    caption: {
        type: String,
      required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
],
comments: [
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
    }
],
repost: {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    caption: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
},commentCount: {
    type: Number,
    default: 0
  },
  repostCount: {
    type: Number,
    default: 0
  },


}, {
    timestamps: true
  });
      module.exports = mongoose.model('Post', postSchema);
  