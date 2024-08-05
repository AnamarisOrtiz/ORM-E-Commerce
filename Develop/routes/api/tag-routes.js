const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
  .then((dbTag) => {
    res.json(dbTag);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "an error occurred", err });
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        through: ProductTag,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
    .then((dbTag) => {
      if (!dbTag) {
        return res.status(404).json({ msg: "no such traveller" });
      }
      res.json(dbTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedTag) => {
    if (!updatedTag[0]) {
      return res.status(404).json({ msg: 'No such tag found' });
    }
    res.json(updatedTag);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "an error occurred", err });
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delTag) => {
      if (!delTag) {
        return res.status(404).json({ msg: 'No such tag found' });
      }
      res.json(delTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'An error occurred', err });
    });
});

module.exports = router;
