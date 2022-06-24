exports.getContact=(req,res,next)=>{
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/admin/contact',
   });
};

exports.postContact= (req, res, next) => {
    
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
   });
  };