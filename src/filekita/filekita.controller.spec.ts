import { Test, TestingModule } from '@nestjs/testing';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';

describe('FilekitaController', () => {
  let controller: FilekitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilekitaController],
      providers: [FilekitaService],
    }).compile();

    controller = module.get<FilekitaController>(FilekitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
