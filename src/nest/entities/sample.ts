import * as uuid from 'uuid';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class SampleEntity {
    public constructor(init?:Partial<SampleEntity>) {
        Object.assign(this, init);
    }

    @PrimaryKey({ type: 'uuid' })
    uuid = uuid.v4();
}
