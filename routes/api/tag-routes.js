const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
  .then(function(data){
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(function(data){
    res.json(data)
  })
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    let returned = await Tag.create(req.body);
    res.json(returned);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    await Tag.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.send(`${req.body.tag_name} updated!`)
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
    try {
      await Tag.destroy(
        {
          where: {
            id: req.params.id
          }
        }
      );
      res.send(`${req.params.id} deleted!`)
    } catch (error) {
      res.json(error);
    }
  });
  
  module.exports = router;
  
module.exports = router;
