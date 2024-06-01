import db from "../db/db.js";
import locals from '../utils/localsObject.js'


export const createBlog = async (req, res) => {
  try {
    const id = locals?.id;
    const userDetails = await db.query(
      `SELECT username FROM userdetails WHERE id='${id}'`
    );
    const username=userDetails.rows[0].username;

    console.log("The userdata into the post",username);


    const { image, title, discription } = req?.body;
    const queryText =
      "INSERT INTO public.blogdata (image, title, discription ,username) VALUES ($1, $2, $3,$4)";
    const values = [image, title, discription, username] ;
    const result = await db.query(queryText, values);
    res.send('success')
  } catch (error) {
    console.error("syntax error......",error.message);
  }
};

export const blogData = async (req, res) => {
  try {
    const blogdata = await db.query("SELECT * FROM blogdata");
   
    res.send(blogdata);
  } catch (error) {
    console.error(error.message);
  }
};

export const singlepost = async (req, res) => {
  try {
    const { id } = req.params;
    const blogdata = await db.query(`SELECT * FROM blogdata where id=${id}`);
    res.send(blogdata);
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogdata = await db.query(`DELETE FROM blogdata WHERE id=${id}`);
    res.send(blogdata);
  } catch {
    console.error(error.message);
  }
};

export const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogdata = await db.query(`SELECT * FROM blogdata where id=${id}`);
    res.send(blogdata);
  } catch (error) {
    console.error(error.message);
  }
};

export const saveEditBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      "UPDATE blogdata SET image = $1, title = $2, discription = $3 WHERE id = $4",
      [req.body.image, req.body.title, req.body.discription, id]
    );
    res.send(result);
  } catch (error) {
    console.error(error.message);
  }
};

export const registerUser = async (req, res) => {
  try {
    const queryText =
      "INSERT INTO public.userdetails (username, passwords, email) VALUES ($1, $2, $3)";
    const values = [req.body.username, req.body.password, req.body.email];
    const result = await db.query(queryText, values);
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = async (req, res) => {
  const userDetails = await db.query(
    `SELECT COUNT(*) FROM userdetails WHERE email='${req.body.email}' AND passwords='${req.body.password}'`
  );
  userDetails.rows[0].count == 1
    ? await db.query("UPDATE userdetails SET loginstatus=1")
    : await db.query("UPDATE userdetails SET loginstatus=0");
  try {
    const getid = await db.query(
      `SELECT id FROM userdetails WHERE email='${req.body.email}'`
    );
    console.log('Setting locals',getid.rows[0].id);
    locals.id = getid.rows[0].id;
    console.log("Local in the login page",locals.id);

    return res.send({ userDetails, id });
  } catch {
    return res.send({ userDetails, hello: "hello" });
  }
};

export const loginStatus = async (req, res) => {
  try {
    const loginStatus = await db.query("SELECT loginStatus FROM userdetails");
    res.send(loginStatus);
  } catch (error) {
    console.error(error.message);
  }
};

export const logoutStatus = async (req, res) => {
  try {
    const updatelogOut = await db.query("UPDATE userdetails SET loginstatus=0");
    const logOutStatus = await db.query("SELECT loginStatus FROM userdetails");
    res.send(logOutStatus);
  } catch (error) {
    console.error(error.message);
  }
};

export const logoutStatuss = async (req, res) => {
  try {
    const logOutStatus = await db.query("SELECT loginStatus FROM userdetails");
    res.send(logOutStatus);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUserData = async (req, res) => {
  try {
    console.log(locals?.id)
    const queryText = await db.query(`UPDATE userdetails SET email='${req.body.email}',username='${req.body.username}',passwords='${req.body.password}' WHERE id=${locals?.id}`);
    // console.log(userDetails.rows[0])
    return res.send(queryText);
  } catch (error) {
    return res.send(error.message);
  }
};

export const gettingUserData = async (req,res) => {
  try {

    console.log('After defining ', locals)
    const id = locals?.id;
    const userDetails = await db.query(
      `SELECT * FROM userdetails WHERE id='${id}'`
    );
    // const queryText = await db.query(' UPDATE userdetails SET loginstatus=1');
    // console.log("having id from setting page",req.body)
    // console.log("fetching data",userDetails)
    return res.send(userDetails);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send(error.message)
  }
};

export const gettingid = async (req, res) => {
  try {
    // const userDetails = await db.query(`SELECT * FROM userdetails WHERE id='${req.body.userID}'`);
    // const queryText = await db.query(' UPDATE userdetails SET loginstatus=1');
    // res.send(userDetails);
  } catch (error) {
    console.error(error.message);
  }
};
