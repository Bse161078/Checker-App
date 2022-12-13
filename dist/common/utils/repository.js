"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(model) {
        this.model = model;
    }
    async create(doc, saveOptions) {
        const createdEntity = new this.model(doc);
        const savedResult = await createdEntity.save(saveOptions);
        return { id: savedResult.id, created: !!savedResult.id };
    }
    async find(filter, options) {
        return await this.model.find(filter, null, options);
    }
    async findById(id) {
        return await this.model.findById(id);
    }
    async findOne(filter, projection, options) {
        return await this.model.findOne(filter, projection, options);
    }
    async findAll() {
        return await this.model.find();
    }
    async aggregate(pipeline, options, callback) {
        return await this.model.aggregate(pipeline, options, callback);
    }
    async remove(filter) {
        const { deletedCount } = await this.model.remove(filter);
        return { deletedCount, deleted: !!deletedCount };
    }
    async updateOne(filter, updated, options) {
        return await this.model.updateOne(filter, updated, options);
    }
    async updateMany(filter, updated, options) {
        return await this.model.updateMany(filter, updated, options);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map